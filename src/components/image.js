import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import './image.css';

const Image = () => {
    const data = useStaticQuery(graphql`
    {
      allFile(
        filter: {extension: {regex: "/(jpg)|(png)|(jpeg)/"}, name: {nin: ["background", "background2"]}}
      ) {
        edges {
          node {
            base
            childImageSharp {
              gatsbyImageData(
                width: 600
                height: 600
                placeholder: BLURRED
              )
            }
            }
          }
        }
      }
  `)

 return (
   <div className="image-container">
     <h1>View our Destinations</h1>
     <div className="image-grid">
       {data.allFile.edges.map((image, key) => (
         <GatsbyImage 
         key={key}
         style={{maxWidth: 600, maxHeight: 600}}
         className="image-item"
         image={getImage(image.node)}
         alt={image.node.base.split('.')[0]}
         />
       ))}
     </div>
   </div>
 )

}

export default Image
