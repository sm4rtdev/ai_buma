import React, { useEffect, useState } from "react";
import {
  ArticleFilterWrapper,
  ArticleTableWrapper,
  FilterOption,
  HomePageWrapper,
  HomeTitleWrapper,
  PaginationWrapper,
} from "./home.styles";
import { ButtonGroup } from "../welcome/welcome.styles";
import { Button, Pagination, PreviewModal } from "../../components";
import { useNavigate } from "react-router-dom";
import { filtersOption } from "./data";
import { useArticleContext } from "../../context";
import { AppLayout } from "../../layouts";
import { Toaster, toast } from "react-hot-toast";
import { embedArticle, getArticleData, removeArticle } from "../../actions";
import { getMyInfo } from "../../utils";

export const HomePage = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("all");
  const [checkAll, setCheckAll] = useState(false);
  const [checked, setChecked] = useState([]);
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [preview, setPreview] = useState({
    id: -1,
    open: false,
  });
  const { articleContext, setArticleContext } = useArticleContext();

  useEffect(() => {
    setAllData(articleContext);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [articleContext]);

  useEffect(() => {
    setFilteredData(
      allData.slice(8 * (currentPage - 1), 8 * (currentPage - 1) + 8)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allData]);

  const handleEmbed = async () => {
    if (checked.length > 0) {
      const res = await embedArticle(checked);
      if (res.success) {
        toast.success("Successfully embeded.");
        const articleData = await getArticleData(getMyInfo().id);
        setArticleContext(articleData.data);
      } else {
        toast.error(res.message);
      }
    } else {
      toast.error("There are no articles selected.");
    }
  };

  const handleRemove = async () => {
    if (checked.length > 0) {
      const res = await removeArticle(checked);
      if (res.success) {
        toast.success("Successfully Removed.");
        const articleData = await getArticleData(getMyInfo().id);
        setArticleContext(articleData.data);
      } else {
        toast.error(res.message);
      }
    } else {
      toast.error("There are no articles selected.");
    }
  };

  const handleCheckAll = (e) => {
    if (e.target.checked) {
      setChecked(articleContext.map((item) => item.id));
    } else {
      setChecked([]);
    }
    setCheckAll(e.target.checked);
  };

  const handlePagination = (number) => {
    setCurrentPage(number);
    setFilteredData(allData.slice(8 * (number - 1), 8 * (number - 1) + 8));
  };

  const handleCheck = (id) => {
    if (checked.filter((f) => f === id).length > 0) {
      setChecked(checked.filter((f) => f !== id));
    } else {
      setChecked((prev) => [...prev, id]);
    }
    setCheckAll(checked.length + 1 === articleContext.length);
  };

  const handlePreview = (id) => {
    setPreview({ id: id, open: true });
  };

  const handleFilter = (key) => {
    setFilter(key);
    if (key === "all") {
      setAllData(articleContext);
    } else if (key === "embeded") {
      setAllData(articleContext.filter((f) => f.embeded));
    } else if (key === "not") {
      setAllData(articleContext.filter((f) => !f.embeded));
    }
  };

  return (
    <AppLayout>
      <Toaster position="top-center" reverseOrder={false} />
      <HomePageWrapper>
        <HomeTitleWrapper>
          <h1>My Articles</h1>
          <ButtonGroup>
            <Button
              className="home-action-button"
              onClick={() => navigate("/new")}
            >
              New
            </Button>
            <Button className="home-action-button" onClick={handleEmbed}>
              Embed
            </Button>
            <Button className="home-action-button" onClick={handleRemove}>
              Remove
            </Button>
          </ButtonGroup>
        </HomeTitleWrapper>
        <ArticleFilterWrapper>
          {filtersOption.map((item, key) => (
            <FilterOption
              key={key}
              active={item.key === filter ? "true" : undefined}
              onClick={() => handleFilter(item.key)}
            >
              {item.label}{" "}
              <span>
                {item.key === "all" && `(${articleContext.length})`}
                {item.key === "embeded" &&
                  `(${articleContext.filter((f) => f.embeded).length})`}
                {item.key === "not" &&
                  `(${articleContext.filter((f) => !f.embeded).length})`}
              </span>
            </FilterOption>
          ))}
        </ArticleFilterWrapper>
        <ArticleTableWrapper>
          <table>
            <thead>
              <tr>
                <th>
                  <input
                    type="checkbox"
                    onChange={handleCheckAll}
                    checked={checkAll}
                  />
                </th>
                <th>Title</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, key) => (
                <tr key={key}>
                  <td className="checkbox">
                    <input
                      type="checkbox"
                      onChange={() => handleCheck(item.id)}
                      checked={checked.filter((f) => f === item.id).length > 0}
                    />
                  </td>
                  <td className="title">
                    <span onClick={() => handlePreview(item.id)}>
                      {item.title}
                    </span>
                  </td>
                  <td className="status">
                    {item.embeded ? <IconCheck active={true} /> : <IconCheck />}
                  </td>
                  <td className="date">
                    {new Date(item.date).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </ArticleTableWrapper>
        <PaginationWrapper>
          <Pagination
            current={currentPage}
            total={Math.ceil(Number(articleContext.length / 8))}
            onPageChange={handlePagination}
          />
        </PaginationWrapper>
      </HomePageWrapper>
      <PreviewModal
        {...preview}
        onClose={() => setPreview({ title: "", content: "", open: false })}
      />
    </AppLayout>
  );
};

const IconCheck = ({ active }) => (
  <svg
    width="16"
    height="10"
    viewBox="0 0 16 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.273315 5.94L3.99998 9.66667L4.93998 8.72L1.21998 5M14.8266 0.720001L7.77332 7.78L4.99998 5L4.04665 5.94L7.77332 9.66667L15.7733 1.66667M12 1.66667L11.06 0.720001L6.82665 4.95333L7.77332 5.89333L12 1.66667Z"
      fill={active ? "#4ECB71" : "#ABB4C0"}
    />
  </svg>
);
