import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

function Spinner() {
  const spinner = <LoadingOutlined spin style={{ fontSize: "68px" }} />;

  return <Spin indicator={spinner} fullscreen={true} description="Loading" />;
}

export default Spinner;
