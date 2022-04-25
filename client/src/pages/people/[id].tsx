import { GetServerSideProps } from "next";
import { getPerson } from "../../API";
import FormOne from '../../components/FormOne/FormOne';

interface IProps {
    person: IPerson;
}

const PersonPage = ({ person }: IProps) => {
    return (
        <div>
            <div className="flex justify-center flex-col items-center mt-5">
                <div className="w-96 flex justify-between">
                    <span className="font-semibold">ID:</span>
                    <span className="ml-2">{person._id}</span>
                </div>

                <div className="w-96 flex justify-between">
                    <span className="font-semibold">First Name:</span>
                    <span className="ml-2">{person.first_name}</span>
                </div>

                <div className="w-96 flex justify-between">
                    <span className="font-semibold">Last Name:</span>
                    <span className="ml-2">{person.last_name}</span>
                </div>

                <div className="w-96 flex justify-between">
                    <span className="font-semibold">Address:</span>
                    <span className="ml-2">{person.address}</span>
                </div>

                <div className="w-96 flex justify-between">
                    <span className="font-semibold">City:</span>
                    <span className="ml-2">{person.city}</span>
                </div>

                <div className="w-96 flex justify-between">
                    <span className="font-semibold">Province:</span>
                    <span className="ml-2">{person.province}</span>
                </div>

                <div className="w-96 flex justify-between">
                    <span className="font-semibold">Postal Code:</span>
                    <span className="ml-2">{person.postal_code}</span>
                </div>

                <div className="w-96 flex justify-between">
                    <span className="font-semibold">Rank:</span>
                    <span className="ml-2">{person.rank}</span>
                </div>

                <div className="w-96 flex justify-between">
                    <span className="font-semibold">Person ID:</span>
                    <span className="ml-2">{person.person_id}</span>
                </div>

                <div className="w-96 flex justify-between">
                    <span className="font-semibold">Color Change Interval:</span>
                    <span className="ml-2">{person.color_change_interval}</span>
                </div>
            </div>

            <div className='mt-5'>
                <FormOne person={person} />
            </div>
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const { id } = params;

    const person = await getPerson(id as string);

    if (!person) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            person,
        },
    };
};

export default PersonPage;
