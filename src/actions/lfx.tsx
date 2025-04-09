

export const fetchLFXOrganizations=async (top?:boolean,filters:any={}):Promise<any[]>=>{
try {
     console.log('Fetching LFX Organizations...');
     const response=await fetch(`${}`,{
        method:`GET`,
        cache:'force-cache',
        credentials:'include',
     });
     const data=await response.json();
     return data.organizations;
} catch (error) {
    console.error('Error fetching LFX organizations:',error);
    throw error;
}
};

export const fetchLFXOrganizationsNames=async():Promise<any[]>=>{
    try {
        console.log('Fetching LFX Organizations...');
        const response=await fetch(`${process.env.LFX_ORG_API}`,{
            method:`GET`,
            cache:`force-cache`,
            credentials:`include`,
        });
        const data= await response.json();
        return data.organizations;
    } catch (error) {
        console.error('Error fetching LFX organizations:',error);
        throw error;
    }
};

export const fetchLFXOrgDetails=async (id:any):Promise<any>=>{
    try {
        console.log('Fetching LFX Organizations.....');
        const response=await fetch(`${process.env.}`,{
            method:`GET`,
            cache:`force-cache`,
            credentials:`include`,
        });

        const data=await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching Lfx organizations:',error);
        throw error;
    }
}