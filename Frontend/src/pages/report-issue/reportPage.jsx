import React, { useEffect, useState } from "react";
import { Button, Container, Typography, Card, CardContent, CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { GET_ALL_ISSUES } from "../../utils/apiUrls";

const ReportPage = () => {
    const [issues, setIssues] = useState([])
    const navigate = useNavigate();
    const fetchIssues = async () => {
        try {
            const res = await fetch(GET_ALL_ISSUES);
            if(!res.ok) {
                throw new Error(res.statusText);
            }
            const issuesData = await res.json();
            setIssues(issuesData);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchIssues();
    }, []);

    return (
        <Container style={{paddingTop: '10%', minHeight: '100vh', textAlign: 'center'}}>
            <Typography variant="h3" align="left" style={{marginBottom: '5%'}}>Reported Issues</Typography>
            {issues.map((issue) => (
                <Card key={issue._id} style={{marginBottom: '1rem'}}>
                    <CardActionArea onClick={() => navigate(`/issue/${issue._id}`)}>
                        <CardContent>
                            <Typography variant="h5" align="left">{issue.title}</Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            ))}
            {issues.length === 0 && <Typography variant="h4">No Issues Raised</Typography>}
            <Button variant="contained" color="primary" href="/issue/new" style={{marginTop: '5%'}}>Report Issue</Button>
        </Container>
    )
}

export default ReportPage;