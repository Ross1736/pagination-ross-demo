import styles from "./App.module.css";
import { useQueryState } from "nuqs";
import { listItems } from "./utils/utils";
import { Pagination } from "pagination-ross";

function App() {
  const [page, setPage] = useQueryState("page", { defaultValue: "1" });

  const itemsPerPage = 5;
  const currentPage = Number(page); // page index starts at 1

  // Calculate total pages
  const totalItems = listItems.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Calculate current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = listItems.slice(startIndex, endIndex);

  function handleClick(page: number) {
    setPage(String(page));
  }

  return (
    <div className={styles.container}>
      <div className={styles.grid_items}>
        {currentItems.length > 0 &&
          currentItems.map((item) => (
            <div key={item.id} className={styles.card}>
              {item.name}
            </div>
          ))}
      </div>

      <Pagination
        className={styles.wrapper}
        buttonClassName={styles.button}
        listClassName={styles.list}
        itemClassName={styles.item}
        activeItemClassName={styles.itemActive}
        ellipsisClassName={styles.ellipsis}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handleClick}
      />
    </div>
  );
}

export default App;
