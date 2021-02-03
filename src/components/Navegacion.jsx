import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ListIcon from '@material-ui/icons/List';

const useStyles = makeStyles((theme) => ({
    link: {
      display: 'flex',
      color: '#C8DBE4',
    },
    icon: {
      marginRight: theme.spacing(0.1),
      color: '#C8DBE4',
      width: 80,
      height: 20,
    },
  }));

const Navegacion = () => {
    const classes = useStyles();
    return (
        <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" href="/home" className={classes.link}>
        <HomeIcon className={classes.icon} />
        Inicio
      </Link>
      <Typography color="textPrimary" className={classes.link}>
      <AssignmentIcon className={classes.icon} />
        Lista de Ordenes
      </Typography>
      <Typography color="textPrimary" className={classes.link}>
        <ListIcon className={classes.icon} />
        Productos
      </Typography>
    </Breadcrumbs>
    )
}

export default Navegacion