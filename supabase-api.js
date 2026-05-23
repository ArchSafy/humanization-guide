const SUPABASE_TABLE = 'road_sections';

const supabaseRequest = async (path = '', options = {}) => {
    const url = `${window.SUPABASE_PROJECT_URL}/rest/v1/${SUPABASE_TABLE}${path}`;
    const response = await fetch(url, {
        ...options,
        headers: {
            apikey: window.SUPABASE_PUBLISHABLE_KEY,
            Authorization: `Bearer ${window.SUPABASE_PUBLISHABLE_KEY}`,
            'Content-Type': 'application/json',
            ...(options.headers || {})
        }
    });

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || 'Supabase request failed');
    }

    if (response.status === 204) return null;
    return response.json();
};

window.roadSectionApi = {
    async list() {
        return supabaseRequest('?select=id,name,description,data,created_at,updated_at&order=updated_at.desc.nullslast');
    },

    async getById(id) {
        const rows = await supabaseRequest(`?select=id,name,description,data,created_at,updated_at&id=eq.${encodeURIComponent(id)}`);
        return rows[0] || null;
    },

    async create(payload) {
        const rows = await supabaseRequest('', {
            method: 'POST',
            headers: {
                Prefer: 'return=representation'
            },
            body: JSON.stringify([payload])
        });
        return rows[0];
    },

    async update(id, payload) {
        const rows = await supabaseRequest(`?select=id,name,description,data,created_at,updated_at&id=eq.${encodeURIComponent(id)}`, {
            method: 'PATCH',
            headers: {
                Prefer: 'return=representation'
            },
            body: JSON.stringify(payload)
        });
        return rows[0];
    }
};
