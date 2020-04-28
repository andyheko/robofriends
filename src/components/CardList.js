import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
    ///// for testing ErrorBoundary purpose 
    // if(true){
    //   throw new Error('there is an error')
    // }
    return (
        <div>
            {
                robots.map((robot) => {
                    return (
                        <Card
                            key={robot.id}
                            id={robot.id}
                            name={robot.name}
                            email={robot.email}
                            />
                    );
                })
            }
        </div>
    );
}

export default CardList;

// <Card id={robots[0].id} name={robots[0].name} email={robots[0].email}/>
// <Card id={robots[1].id} name={robots[1].name} email={robots[1].email}/>
// <Card id={robots[2].id} name={robots[2].name} email={robots[2].email}/>
