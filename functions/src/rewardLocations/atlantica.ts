import { GameMode } from "../Configuration";
import { Rewards } from "../rewards";
import { formRewards } from "../rewards/form";
import { Reward } from "../rewards/Reward";
import { RewardLocation, RewardLocationType } from "./RewardLocation";

const exclude: Reward[] = [
	...Object.values(formRewards),
	Rewards.THUNDER,
	Rewards.MAGNET,
	Rewards.TORN_PAGE,
];

export const atlanticaRewardLocations: RewardLocation[] = [
	{
		type: RewardLocationType.POPUP,
		description: "Undersea Kingdom Map",
		value: "11CE0846",
		reward: Rewards.UNDERSEA_KINGDOM_MAP,
	},
	{
		type: RewardLocationType.POPUP,
		description: "Mysterious Abyss",
		value: "11CE08E2",
		reward: Rewards.MYSTERIOUS_ABYSS,
		gameMode: {
			[GameMode.GOA_MOD]: { 0: { exclude } },
		},
	},
	{
		type: RewardLocationType.POPUP,
		description: "Blizzard Upgrade (Atlantica)",
		value: "11CE08EE",
		reward: Rewards.BLIZZARD,
		gameMode: {
			[GameMode.GOA_MOD]: { 0: { exclude } },
		},
	},
	{
		type: RewardLocationType.POPUP,
		description: "Orichalcum+ (Atlantica)",
		value: "11CE08FA",
		reward: Rewards.ORICHALCUM_PLUS,
		gameMode: {
			[GameMode.GOA_MOD]: { 0: { exclude } },
		},
	},
];
