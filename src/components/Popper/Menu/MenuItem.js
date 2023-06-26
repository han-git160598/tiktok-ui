import Button from "~/components/Button";

function MenuItem({data}) {
  console.log(data);
    return (
        <Button lefticon ={data.icon} to={data.to}>{data.title}</Button>
      );
}

export default MenuItem;