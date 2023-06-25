import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LogoutIcon from '@mui/icons-material/Logout';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
export const options = [
    {
        Role:"Admin",
        Navs:[
            {
                text:"My Profile",
                icon:<ManageAccountsIcon/>,
                link:"/adminmyProfile"
            },
            {
                text:"Add Users",
                icon: <PersonAddIcon/>,
                link:"/adminaddUser"
            },
            {
                text:"View/Update User",
                icon:<ChangeCircleIcon/>,
                link:"/adminviewUser"
            },
            {
                text:"Logout",
                icon:<LogoutIcon/>,
                link:"/"
            }
        ]
    },
    {
        Role:"Staff",
        Navs:[
            {
                text:"My Profile",
                icon:<ManageAccountsIcon/>,
                link:"/staffmyProfile"
            },
            {
                text:"Add Users",
                icon: <PersonAddIcon/>,
                link:"/staffaddUser"
            },
            {
                text:"View/Update User",
                icon:<ChangeCircleIcon/>,
                link:"/staffviewUser"
            },
            {
                text:"Logout",
                icon:<LogoutIcon/>,
                link:"/"
            }    
        ]
    },
    {
        Role:"User",
        Navs:[
            {
                text:"My Profile",
                icon:<ManageAccountsIcon/>,
                link:"/usermyProfile"
            },
            {
                text:"Logout",
                icon:<LogoutIcon/>,
                link:"/"
            }        
        ]
    }
]

export const BackRoutes = [
    {
        link:'/AdminDashBoard'
    },
    {
        link:'/StaffDashBoard'
    },
    {
        link:'/UserDashBoard'
    }
]