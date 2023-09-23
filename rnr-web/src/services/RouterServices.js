import { useNavigate, useParams, useLocation } from 'react-router-dom'

export const routerServices = (Component) => {
  const Wrapper = (props) => {
    const navigate = useNavigate();
    const params = useParams();
    const {state} = useLocation();

    return (
      <Component
        navigate={navigate}
        params ={params} routeData={state}
        {...props} 
        />
    );
  };
  
  return Wrapper;
};