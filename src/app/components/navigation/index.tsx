import React from "react";
import { NavLink } from "react-router-dom";
import { localization } from "../../localization";
import routeNames from "../../routes/routeNames";
import "./styles.css";

interface MenuItemProps {
  label: string;
  route: string;
}

const Navigation = () => {

  const menuItems: MenuItemProps[] = [
    {
      route: routeNames.INVENTORY,
      label: localization.inventoryLabel
    },
    {
      route: routeNames.NEW_PRODUCT,
      label: localization.newProductLabel
    }
  ]
  return (
    <nav>
      <ul>
        {menuItems.map(item => (
          <li key={item.route}>
            <NavLink
              to={item.route}
              activeClassName="active"
              className="nav-link">
                {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;