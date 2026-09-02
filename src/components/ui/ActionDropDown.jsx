import { Button, Dropdown } from "antd";
import { MoreOutlined } from "@ant-design/icons";

function ActionDropDown({ items, handleMenuClick }) {
  return (
    <Dropdown
      placement="bottomRight"
      menu={{ items, onClick: handleMenuClick }}
      trigger={"click"}
    >
      <Button icon={<MoreOutlined />} />
    </Dropdown>
  );
}

export default ActionDropDown;
