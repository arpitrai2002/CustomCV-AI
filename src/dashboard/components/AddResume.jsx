import { Loader2, PlusSquare } from 'lucide-react';
import React, { useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { v4 as uuidv4 } from 'uuid';
import GlobalApi from './../../../service/GlobalApi';
import { useUser } from '@clerk/clerk-react';
import { Navigate, useNavigate } from 'react-router-dom';

function AddResume() {
    const [openDialog, setOpenDialog] = useState(false);
    const [resumeTitle, setResumeTitle] = useState();
    const { user } = useUser();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const onCreate = async () => {
        setLoading(true);
        const uuid = uuidv4();
        const data = {
            data: {
                title: resumeTitle,
                resumeId: uuid,
                userEmail: user?.primaryEmailAddress?.emailAddress,
                userName: user?.fullName
            }
        };

        GlobalApi.CreateNewResume(data).then(resp => {
            if (resp) {
                setLoading(false);
                navigate('/dashboard/resume/' + uuid + "/edit");
            }
        }, (error) => {
            setLoading(false);
        });
    };

    return (
        <div className="bg-gradient-to-br from-gray-800 to-black rounded-lg h-[300px] flex items-center justify-center transition-transform transform hover:scale-105 hover:shadow-lg cursor-pointer border border-dashed border-gray-700"
            onClick={() => setOpenDialog(true)}
        >
            <PlusSquare className="text-gray-300 w-16 h-16" />

            <Dialog open={openDialog} onOpenChange={setOpenDialog}>
                <DialogContent className="bg-gray-900 text-white rounded-lg shadow-2xl p-6 max-w-md">
                    <DialogHeader>
                        <DialogTitle className="text-3xl font-bold">Create New Resume</DialogTitle>
                        <DialogDescription className="text-gray-400">
                            <p className="mb-4">Add a title for your new resume</p>
                            <Input className="my-2 text-black"
                                placeholder="e.g., Full Stack Developer Resume"
                                onChange={(e) => setResumeTitle(e.target.value)}
                            />
                        </DialogDescription>
                    </DialogHeader>
                    <div className='flex justify-end gap-4 mt-4'>
                        <Button onClick={() => setOpenDialog(false)} variant="ghost" className="text-gray-300 hover:text-white">Cancel</Button>
                        <Button 
                            disabled={!resumeTitle || loading} 
                            onClick={onCreate}
                            className="bg-primary hover:bg-primary-dark text-white transition duration-300 shadow-lg"
                        >
                            {loading ? <Loader2 className='animate-spin w-5 h-5' /> : 'Create'}
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default AddResume;
