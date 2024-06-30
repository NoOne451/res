type UserData = {
  username: string;
  date: string;
};

type DataItem = {
  id: number;
  feedback: string;
  user: UserData[];
};
type TestimonyItemProps = {
  data: DataItem;
};
export const TestimonyItem: React.FC<TestimonyItemProps> = ({ data }) => (
  <div className="flex flex-col justify-around p-8 bg-customGreen ">
    <div className="text-justify ">{data.feedback}</div>
    <div className="flex gap-[15px] ">
      <img
        src="about.jpg"
        className="h-[32px] w-[32px] rounded-[32px]"
        alt=""
      />
      <div className="">
        <p>{data.user[0].username}</p>
        <p className=" text-black text-[13px]">{data.user[0].date}</p>
      </div>
    </div>
  </div>
);
