import {Box, Button, Stack, TextField, Typography} from "@mui/material";

export default function RegisterForm(props) {
    return (
       <>
        <Stack width={'100vw'} height={'100vh'} maxWidth={'100%'}>
            <Stack ml={9} mt={4}>
                <Typography fontSize={'29px'}>User Registration</Typography>
            </Stack>
            <Stack direction={'column'} justifyContent={'center'} alignItems={'center'} spacing={4} mt={8}>
                <Stack direction={'row'} spacing={19}>
                    <TextField size={'small'} label={'First Name'} sx={{width: '400px'}}></TextField>
                    <TextField size={'small'} sx={{width: '400px'}} label={'Last Name'}></TextField>
                </Stack>
                <Stack direction={'row'} spacing={19}>
                    <TextField size={'small'} sx={{width: '400px'}} label={'Email'}></TextField>
                    <TextField size={'small'} sx={{width: '400px'}} label={'User Name'}></TextField>
                </Stack>
                <Stack direction={'row'} spacing={19}>
                    <TextField size={'small'} sx={{width: '400px'}}  label={'Password'} type={'password'}></TextField>
                    <TextField size={'small'} sx={{width: '400px'}}  label={'City'}></TextField>
                </Stack>
                <Stack direction={'row'} spacing={19}>
                    <TextField size={'small'} sx={{width: '400px'}}  label={'Street'}></TextField>
                    <TextField size={'small'} sx={{width: '400px'}}  label={'Steet No'}></TextField>
                </Stack>
                <Stack direction={'row'} spacing={19}>
                    <TextField size={'small'} sx={{width: '400px'}}  label={'Zip Code'}></TextField>
                    <TextField size={'small'} sx={{width: '400px'}}  label={'Lat Value'}></TextField>
                </Stack>
                <Stack direction={'row'} spacing={19}>
                    <TextField size={'small'} sx={{width: '400px'}}  label={'Long Value'}></TextField>
                    <TextField size={'small'} sx={{width: '400px'}} label={'Mobile No'}></TextField>
                </Stack>
            </Stack>
            <Stack direction={'row'} justifyContent={'flex-end'} width={'80%'} mt={6} spacing={3}>
                <Box>
                    <Button variant={'contained'} color={'error'}>Clear</Button>
                </Box>
                <Box>
                    <Button variant={'contained'} color={'success'}>Save</Button>
                </Box>
            </Stack>
        </Stack>
    <Stack height={'100vh'}>

    </Stack>
    </>
    );
}