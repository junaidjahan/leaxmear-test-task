<template>
    <div>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-x-3">
            <RoomCard v-for="(room, index) in rooms" v-bind="room" :key="index" class="w-full p-5">
                This is Rooms page
            </RoomCard>
        </div>
    </div>
</template>
<script setup lang="ts">
import { RoomCard } from '../../components/shared';

const rooms = [
    {
        title: 'Room # 1',
        capacity: '2',
        status: 'ready',
        buttonText: 'Assign Guest'
    },
    {
        title: 'Room # 2',
        capacity: '4',
        status: 'maintenance',
        buttonText: 'Set as Ready'
    },
    {
        title: 'Room # 4',
        capacity: '8',
        status: 'taken',
        guest:'Mo Ku',
        buttonText: 'Room Empty'
    },
    {
        title: 'Room # 4',
        capacity: '8',
        status: 'taken',
        guest:'Mo Ku',
        buttonText: 'Room Empty'

    },
]
</script>