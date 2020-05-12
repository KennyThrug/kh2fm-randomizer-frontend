import { GameMode } from "../Configuration";
import { Rewards } from "../rewards";
import { Reward } from "../rewards/Reward";
import { RewardLocation, RewardLocationType } from "./RewardLocation";

const exclude: Reward[] = [Rewards.TORN_PAGE];

export const poohRewardLocations: RewardLocation[] = [
	{
		type: RewardLocationType.BIGCHEST,
		description: "100 Acre Wood (Pooh Bear's House)",
		value: "11CDFA12",
		reward: Rewards.HUNDRED_ACRE_WOOD_MAP,
	},
	{
		type: RewardLocationType.CHEST,
		description: "100 Acre Wood (Pooh Bear's House)",
		value: "11CDFA1E",
		reward: Rewards.AP_BOOST,
	},
	{
		type: RewardLocationType.CHEST,
		description: "100 Acre Wood (Pooh Bear's House)",
		value: "11CDFA2A",
		reward: Rewards.MYTHRIL_STONE,
	},
	{
		type: RewardLocationType.BIGCHEST,
		description: "100 Acre Wood (Piglet's House)",
		value: "11CDFA36",
		reward: Rewards.DEFENSE_BOOST,
		gameMode: {
			[GameMode.GOA_MOD]: { 0: { exclude } },
		},
	},
	{
		type: RewardLocationType.CHEST,
		description: "100 Acre Wood (Piglet's House)",
		value: "11CDFA42",
		reward: Rewards.AP_BOOST,
		gameMode: {
			[GameMode.GOA_MOD]: { 0: { exclude } },
		},
	},
	{
		type: RewardLocationType.CHEST,
		description: "100 Acre Wood (Piglet's House)",
		value: "11CDFA4E",
		reward: Rewards.MYTHRIL_GEM,
		gameMode: {
			[GameMode.GOA_MOD]: { 0: { exclude } },
		},
	},
	{
		type: RewardLocationType.BIGCHEST,
		description: "100 Acre Wood (Rabbit's House)",
		value: "11CDFA5A",
		reward: Rewards.DRAW_RING,
		gameMode: {
			[GameMode.GOA_MOD]: { 0: { exclude } },
		},
	},
	{
		type: RewardLocationType.CHEST,
		description: "100 Acre Wood (Rabbit's House)",
		value: "11CDFA66",
		reward: Rewards.MYTHRIL_CRYSTAL,
		gameMode: {
			[GameMode.GOA_MOD]: { 0: { exclude } },
		},
	},
	{
		type: RewardLocationType.CHEST,
		description: "100 Acre Wood (Rabbit's House)",
		value: "11CDFA72",
		reward: Rewards.AP_BOOST,
		gameMode: {
			[GameMode.GOA_MOD]: { 0: { exclude } },
		},
	},
	{
		type: RewardLocationType.BIGCHEST,
		description: "100 Acre Wood (Kanga's House)",
		value: "11CDFA7E",
		reward: Rewards.MAGIC_BOOST,
		gameMode: {
			[GameMode.GOA_MOD]: { 0: { exclude } },
		},
	},
	{
		type: RewardLocationType.CHEST,
		description: "100 Acre Wood (Kanga's House)",
		value: "11CDFA8A",
		reward: Rewards.AP_BOOST,
		gameMode: {
			[GameMode.GOA_MOD]: { 0: { exclude } },
		},
	},
	{
		type: RewardLocationType.CHEST,
		description: "100 Acre Wood (Kanga's House)",
		value: "11CDFA96",
		reward: Rewards.ORICHALCUM,
		gameMode: {
			[GameMode.GOA_MOD]: { 0: { exclude } },
		},
	},
	{
		type: RewardLocationType.CHEST,
		description: "100 Acre Woods (The Spooky Cave)",
		value: "11CDFAA2",
		reward: Rewards.MYTHRIL_GEM,
		gameMode: {
			[GameMode.GOA_MOD]: { 0: { exclude } },
		},
	},
	{
		type: RewardLocationType.CHEST,
		description: "100 Acre Wood (The Spooky Cave)",
		value: "11CDFAAE",
		reward: Rewards.AP_BOOST,
		gameMode: {
			[GameMode.GOA_MOD]: { 0: { exclude } },
		},
	},
	{
		type: RewardLocationType.CHEST,
		description: "100 Acre Wood (The Spooky Cave)",
		value: "11CDFABA",
		reward: Rewards.ORICHALCUM,
		gameMode: {
			[GameMode.GOA_MOD]: { 0: { exclude } },
		},
	},
	{
		type: RewardLocationType.CHEST,
		description: "100 Acre Wood (The Spooky Cave)",
		value: "11CDFAC6",
		reward: Rewards.GUARD_RECIPE,
		gameMode: {
			[GameMode.GOA_MOD]: { 0: { exclude } },
		},
	},
	{
		type: RewardLocationType.CHEST,
		description: "100 Acre Wood (The Spooky Cave)",
		value: "11CDFAD2",
		reward: Rewards.MYTHRIL_CRYSTAL,
		gameMode: {
			[GameMode.GOA_MOD]: { 0: { exclude } },
		},
	},
	{
		type: RewardLocationType.CHEST,
		description: "100 Acre Wood (The Spooky Cave)",
		value: "11CDFADE",
		reward: Rewards.AP_BOOST,
		gameMode: {
			[GameMode.GOA_MOD]: { 0: { exclude } },
		},
	},
	{
		type: RewardLocationType.BIGCHEST,
		description: "100 Acre Wood (Starry Hill)",
		value: "11CDFAEA",
		reward: Rewards.COSMIC_RING,
		gameMode: {
			[GameMode.GOA_MOD]: { 0: { exclude } },
		},
	},
	{
		type: RewardLocationType.CHEST,
		description: "100 Acre Wood (Starry Hill)",
		value: "11CDFAF6",
		reward: Rewards.STYLE_RECIPE,
		gameMode: {
			[GameMode.GOA_MOD]: { 0: { exclude } },
		},
	},
	{
		type: RewardLocationType.POPUP,
		description: "Sweet Memories",
		value: "11CE0906",
		reward: Rewards.SWEET_MEMORIES,
		gameMode: {
			[GameMode.GOA_MOD]: { 0: { exclude } },
		},
	},
	{
		type: RewardLocationType.POPUP,
		description: "Spooky Cave Map",
		value: "11CE0912",
		reward: Rewards.SPOOKY_CAVE_MAP,
		gameMode: {
			[GameMode.GOA_MOD]: { 0: { exclude } },
		},
	},
	{
		type: RewardLocationType.POPUP,
		description: "Cure Upgrade (100 Acre Wood)",
		value: "11CE091E",
		reward: Rewards.CURE,
		gameMode: {
			[GameMode.GOA_MOD]: { 0: { exclude } },
		},
	},
	{
		type: RewardLocationType.POPUP,
		description: "Orichalcum+ (100 Acre Wood)",
		value: "11CE092A",
		reward: Rewards.ORICHALCUM_PLUS,
		gameMode: {
			[GameMode.GOA_MOD]: { 0: { exclude } },
		},
	},
];
