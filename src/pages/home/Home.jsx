
import Banner from './Banner';
import ContactUs from './ContactUs';
import PopularClasses from './PopularClasses';
import PopularInstructor from './PopularInstructor';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <PopularInstructor></PopularInstructor>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;