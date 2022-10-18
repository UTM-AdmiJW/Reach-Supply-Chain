import React,{useContext, useState, useEffect} from 'react'
import { Typography, Card, CardContent, Button } from "@mui/material";
import Title from '../components/Title'
import { useNavigate,useLocation } from 'react-router-dom';
import Loading from '../components/Loading';

import ContractContext from '../../context/ContractContext';
import SnackbarContext from '../../context/SnackbarContext';



export default function ContractDetail () {
    const navigate = useNavigate();
    const location = useLocation();
    const [ctcInfo, setCtcInfo] = useState();

    const {contract} = useContext(ContractContext);
    const { showErrorToast } = useContext(SnackbarContext)

    const [qrData, setQrData] = useState("https://www.google.com/")

    useEffect(() => {
        (async () => {
            const ctcInfo = await contract.getInfo();
            setCtcInfo(JSON.stringify(ctcInfo));
        })();
    }, [contract]);

    //QRCODE AND LINK GENERATOR GOES HERE
    

    return <>
        {ctcInfo}
        <Title />
        <h3><i>You are <strong>Buyer</strong></i></h3>
        <span>Deploy New Contract</span>
        <br />
        <Card sx={{ minWidth: 675 }}>
            <CardContent>
                <h2 className='text-center'><b>Contract Details</b></h2>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Ingredient Name: {location.state.ingredient}
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Seller Address: {location.state.sellerAddress}
                </Typography>
            </CardContent>    
        </Card>

        <br /><br />

        <div className='d-flex justify-content-between w-75'>
            <div className='flex-column d-flex justify-content-center'>
                <Card sx={{ minWidth: 275, height: 180 }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                            {qrData}
                        </Typography>
                    </CardContent>
                </Card>
                <br />
                <Button variant='outlined'>Share Link</Button>
            </div>
            <div className='flex-column d-flex justify-content-center'>
                <Card sx={{ minWidth: 175, height: 180 }}>
                    <CardContent>
                        <img src={`https://api.qrserver.com/v1/create-qr-code/?data=${qrData}&size=150x150`} />
                    </CardContent>
                </Card>
                <br />
                <Button variant='outlined'>Share QR</Button>
            </div>
        </div>

    </>
}