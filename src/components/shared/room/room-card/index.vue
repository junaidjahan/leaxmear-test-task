<template>
    <BaseCard class="!py-7">
        <div class="bg-primary-600 w-fit p-3 rounded-lg">
            <img src="../../../../assets/room.png" height="60" width="60" alt="" srcset="">
        </div>
        <h2 class="text-5xl mt-3 font-medium">
            {{ title }}
        </h2>
        <h4 class="text-xl mt-3">
            Capacity : <span class="font-semibold">{{ capacity }}</span>
        </h4>
        <h4 class="text-xl mt-2">
            Status: <span class="font-semibold !text-xs ml-3" :class="[statusStyle[status.toLowerCase()]]">{{ status.toUpperCase() }}</span>
        </h4>
        <div class="mt-7">
            <BaseButton class="w-full" >
                {{ buttonText }}
            </BaseButton>
        </div>
    </BaseCard>
</template>

<script setup lang="ts">
import { BaseCard, BaseButton } from '../../../base';

interface RoomCardProps {
    title: string,
    capacity: string,
    status: string,
    guest?: string | null
    buttonText: string

}

const statusStyle: any = {
    ready: 'bg-teal-100 text-teal-800 px-3 text-base rounded-full py-1',
    maintenance: 'bg-orange-100 text-orange-800 px-3 text-base rounded-full py-1',
    taken: 'bg-red-100 text-red-800 px-3 text-base rounded-full py-1',
}

defineProps<RoomCardProps>()

</script>