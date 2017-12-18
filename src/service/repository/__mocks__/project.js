// @flow

import Project from "../../../model/Project";
import Metadata from "../../../model/Metadata";

export const defaultProjects = [
    new Project(
        '12312',
        'First project',
        new Metadata(
            new Date('2017-01-01 12:00:00'),
            new Date('2017-01-01 12:10:00'),
            true
        ),
        ['en', 'fr']
    ),
    new Project(
        '321312',
        'Second project',
        new Metadata(
            new Date('2017-02-01 12:00:00'),
            new Date('2017-02-01 12:10:00'),
            true
        ),
        ['en', 'fr']
    ),
];

let errorWhileFetching = false;

export function fetchProjects(): Promise<Project[]> {
    return new Promise((resolve, reject) => {
        if (errorWhileFetching) {
            reject('Controlled error by passing errorWhileFetching flag to true');
            return;
        }

        return resolve(defaultProjects);
    });
}

export function __reset() {
    errorWhileFetching = false;
}

export function __failWhileFetchingProjects() {
    errorWhileFetching = true;
}


