import { AboutUs, Auth, CreateSurvey, MySurveys, Profile, ResultOfSurvey, Survey, Surveys } from '../components/pages/index'

export const routes = {
    auth: [
        {
            path: "/",
            element: AboutUs
        },
        {
            path: "/create-survey",
            element: CreateSurvey
        },
        {
            path: "/surveys/:user",
            element: MySurveys
        },
        {
            path: "/profile/:id",
            element: Profile
        },
        {
            path: "/survey/result/:id",
            element: ResultOfSurvey
        },
        {
            path: "/survey/:id",
            element: Survey
        },
        {
            path: "/surveys",
            element: Surveys
        },
        {
            path: '/auth',
            element: Auth
        }
    ],
    root: [
        {
            path: '/',
            element: Auth
        }
    ]
}