import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";
import BgRegis from "../Images/rectangle 56.png";
import Form from "../../Components/Form";
import "../style/style.css";
import Footer from "../../Components/Footer";

function Register() {
  return (
    <div>
      <div className="bgRegis flex justify-center border">
        <div className="py-4 px-6 sm:px-10 md:px-20 lg:px-20">
          <Card className="flex-row my-10 overflow-hidden">
            <CardHeader
              shadow={false}
              floated={false}
              className="m-0 w-2/5 shrink-0 rounded-r-none"
            >
              <img
                src={BgRegis}
                alt="card-image"
                className="h-full w-full object-cover"
              />
            </CardHeader>
            <CardBody className=" w-full">
              <Typography
                color="blue-gray"
                className=" text-sm mb-8 font-bold sm:text-xl md:text-xl lg:text-3xl lg:mb-24"
              >
                Register
              </Typography>
              <Typography
                color="gray"
                className="mt-1 text-xs overflow-hidden sm:text-sm lg:text-xl"
              >
                Nice to meet you! Enter your details to register.
              </Typography>
              <Typography
                variant="h6"
                color="blue-gray"
                className="mb-3 text-sm mt-3 font-bold sm:text-base lg:text-xl"
              >
                UserName
              </Typography>
              <Input className=" h-4 w-32 sm:w-full"></Input>
              <Typography
                variant="h6"
                color="blue-gray"
                className="mb-3 text-sm mt-3 font-bold sm:text-base lg:text-xl"
              >
                Email
              </Typography>
              <Input className="h-4 w-32 sm:w-full"></Input>
              <Typography
                variant="h6"
                color="blue-gray"
                className="mb-3 text-sm mt-3 font-bold sm:text-base lg:text-xl"
              >
                Password
              </Typography>
              <Input className="h-4 w-32 sm:w-full"></Input>
              <Typography
                variant="h6"
                color="blue-gray"
                className="mb-3 text-sm mt-3 font-bold sm:text-base lg:text-xl"
              >
                Confirm Password
              </Typography>
              <Input className="h-4 w-32 sm:w-full"></Input>
              <Button className=" bg-maincolor w-32 sm:w-full mt-5 lg:h-14 lg:text-base">
                Confirm
              </Button>
            </CardBody>
          </Card>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Register;
