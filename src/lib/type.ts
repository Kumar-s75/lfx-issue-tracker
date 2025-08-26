type Project={
    title:string,
    short_description:string,
    description:string,
    student_name:string,
    code_url:string,
    project_url:string,
    proposal_id?:string;
};

type LfxYear={
projects_url:string,
num_projects:number,
projects:Project[];
};

type LfxYears={
    [year:string]:LfxYear;
};

export type Organisation={
    _id:string;
    organisation:string;
    github:string;
    lfx_years:LfxYears;
    blog_url:string;
    category:string;
    contact_email:string;
    description:string;
    image_background_colour:string;
    image_url:string;
    irc_channel:string;
    mailing_list:string;
    technologies:string[],
    topics:string[],
    twitter_url:string;
    url:string;

};

// lib/types.ts
export type IssueFilters = {
  organizations: string[];
  label: string;
};

export type IssuesProps = {
  filters: IssueFilters;
  onFilterChange?: (filter: IssueFilters) => void;
};
