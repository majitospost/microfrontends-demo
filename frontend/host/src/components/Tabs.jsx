import React, {
  createContext,
  useContext,
  useState,
  Children,
  isValidElement,
} from "react";

const TabsContext = createContext(null);

export function Tabs({ defaultId, children }) {
  const ids = Children.toArray(children)
    .filter(isValidElement)
    .map((child) => child.props.id);
  const [activeId, setActiveId] = useState(defaultId ?? ids[0]);

  return (
    <TabsContext.Provider value={{ activeId, setActiveId }}>
      <div className="nh-tabs">
        <div className="nh-tabs__list" role="tablist">
          {Children.map(children, (child) => (
            <TabButton id={child.props.id} label={child.props.label} />
          ))}
        </div>
        <div className="nh-tabs__panel">
          {Children.toArray(children).find(
            (child) => child.props.id === activeId,
          )}
        </div>
      </div>
    </TabsContext.Provider>
  );
}

function TabButton({ id, label }) {
  const { activeId, setActiveId } = useContext(TabsContext);
  const isActive = activeId === id;
  return (
    <button
      role="tab"
      aria-selected={isActive}
      className={`nh-tabs__tab ${isActive ? "nh-tabs__tab--active" : ""}`}
      onClick={() => setActiveId(id)}
    >
      {label}
    </button>
  );
}

Tabs.Panel = function Panel({ children }) {
  return <div className="nh-tabs__content">{children}</div>;
};
