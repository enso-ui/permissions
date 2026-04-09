<template>
    <enso-table class="box p-0"
        id="permissions">
        <template #type="{ column, row }">
            <span class="tag"
                :class="cssClass(column.enum, row)">
                {{ row.type }}
            </span>
        </template>
    </enso-table>
</template>

<script>
import { EnsoTable } from '@enso-ui/tables/bulma';
import cssClass from '../../modules/permission';

export default {
    name: 'Index',

    components: { EnsoTable },

    methods: {
        cssClass(columnEnum, row) {
            return cssClass(columnEnum, row);
        },
    },
};
</script>
