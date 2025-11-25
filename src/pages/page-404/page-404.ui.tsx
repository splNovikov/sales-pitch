import { Result, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { pathKeys } from '~shared/router';

export default function Page404() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate(pathKeys.home);
  };

  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, we couldn't find the page you're looking for."
      extra={
        <Button type="primary" onClick={handleGoHome}>
          Go back home
        </Button>
      }
    />
  );
}
