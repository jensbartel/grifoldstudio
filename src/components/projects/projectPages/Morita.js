import { useEffect } from 'react';

import Headline from '../reuseComponents/Headline';
import LargeTextCenter from '../reuseComponents/LargeTextCenter';
import ProjectTitle from '../reuseComponents/ProjectTitle';
import ThreeImages from '../reuseComponents/ThreeImages';
import TwoVideos from '../reuseComponents/TwoVideos';

import desktopImg from '../../../img/morita/morita_macbook.jpg';
import ipadImg from '../../../img/morita/morita_ipad.jpg';
import iphoneImg from '../../../img/morita/morita_iphone.jpg';
import ImageCollage1 from '../reuseComponents/ImageCollage1';

// collage images
import collage1_1 from '../../../img/morita/morita_vip1.jpg';
import collage1_2 from '../../../img/morita/morita_vip2.jpg';
import collage1_3 from '../../../img/morita/mortia-part4-snippet.jpg';
import collage1_4 from '../../../img/morita/footnote.jpg';
import collage1_5 from '../../../img/morita/morita-part3-snippet.jpg';

import MoritaData from '../../../data/projectData/MoritaData';
import { webPages } from '../../../data/projectOverviewData/WebPageObjects';

const MoritaProject = () => {
    const { headline2, headline3, FootNoteText } = MoritaData;
    const { projects } = webPages;
    const project = projects.MoritaShiryu;

    useEffect(() => {
        document.title = 'Morita Shiryū';
    }, []);

    return (
        <>
            <ProjectTitle project={project} />
            <ThreeImages img1={desktopImg} img2={ipadImg} img3={iphoneImg} />
            <Headline headline='Pullquote Animations' />
            <TwoVideos />
            <Headline headline={headline2} />
            <ImageCollage1 img1={collage1_1} img2={collage1_2} img3={collage1_3} img4={collage1_4} img5={collage1_5} />
            <LargeTextCenter headline={headline3} text={FootNoteText} />

            {/* div below: replace later */}
            {/* <div style={{ height: '4rem' }}></div> */}
        </>
    );
};

export default MoritaProject;
