import React from 'react';
import {makeStyles} from '@material-ui/styles';
import Typograpy from "@material-ui/core/Typography/Typography"
import Button from "@material-ui/core/Button/Button" 
import Card from "@material-ui/core/Card/Card"
import CardActions from "@material-ui/core/CardActions/CardActions"
import CardContent from "@material-ui/core/CardContent/CardContent"
import CardMedia from "@material-ui/core/CardMedia/CardMedia"
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'; 
import moment from "moment"
import {useDispatch, useSelector} from "react-redux"
import {Delete_Posts_ACTION,Like_Posts_ACTION} from "../../../redux/action_reducer/post.action"

let Post_inside_Posts = (props) =>{
  const dispatch = useDispatch()
    const useStyles = makeStyles({
        media: {
            height: 0,
            paddingTop: '56.25%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            backgroundBlendMode: 'darken',
          },
          border: {
            border: 'solid',
          },
          fullHeightCard: {
            height: '100%',
          },
          card: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            borderRadius: '15px',
            height: '100%',
            position: 'relative',
          },
          overlay: {
            position: 'absolute',
            top: '20px',
            left: '20px',
            color: 'white',
          },
          overlay2: {
            position: 'absolute',
            top: '20px',
            right: '20px',
            color: 'white',
          },
          grid: {
            display: 'flex',
          },
          details: {
            display: 'flex',
            justifyContent: 'space-between',
            margin: '20px',
          },
          title: {
            padding: '0 16px',
          },
          cardActions: {
            padding: '0 16px 8px 16px',
            display: 'flex',
            justifyContent: 'space-between',
          },
      });
      const classes = useStyles()
	  
    
    return(
      <div>
        {/* <h4>Posts inside</h4> */}
        	{/* <pre>{JSON.stringify(props.post)}</pre> */}
			<Card className = {classes.card}>
				<CardMedia className = {classes.media} image={props.post.selectedFile.base64} title = {props.post.title}/>
				<div className = {classes.overlay}>
                    <Typograpy variant ="h6">
                        {props.post.creator}
                    </Typograpy>
                    <Typograpy variant ="body2">
                        {/* 5 min ago like that */}
                        {moment(props.post.createdAt).fromNow()} 
                    </Typograpy>
				</div>
                <div className = {classes.overlay2}>
                    <Button style={{color:"white"}} size="small" onClick={()=>{props.setCurrentId(props.post._id)}}>
                        <MoreHorizIcon fontSize="default" />
                    </Button>
                </div>

				<div className = {classes.details}>
					<Typograpy variant ="body2" color="textSecondary">
						{props.post.tags.map((tag)=>`#${tag} `)}
					</Typograpy>
                </div>
                <Typograpy variant ="h5" className = {classes.title} gutterBottom>
                    {props.post.title}
                </Typograpy>
                <CardContent>
                    <Typograpy variant ="body2" color="textSecondary" component="p">
                        {props.post.message}
                    </Typograpy>
                </CardContent>
                <CardActions className={classes.cardActions}>
                    <Button size="small" color='danger' onClick={()=>dispatch(Like_Posts_ACTION(props.post._id))}>
                        <ThumbUpAltIcon fontSize="small"/>
                        &nbsp; Like &nbsp;
                            {props.post.likeCount}
                    </Button>
                    <Button size="small" color='danger' onClick={()=>dispatch(Delete_Posts_ACTION(props.post._id))}>
                        <DeleteIcon fontSize="small"/>
                            Delete
                    </Button>
                </CardActions>	
			</Card>
        </div>
    )
}

export default Post_inside_Posts;