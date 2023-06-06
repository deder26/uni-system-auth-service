import { User } from './users.model'

const findLastUserId = async () => {
  const lastUser = await User.findOne({}, { id: 1, _id: 0 })
    .sort({ createdAt: -1 })
    .lean()
  return lastUser?.id
}
export const generateUserID = async () => {
  const currentUserID = (await findLastUserId()) || String(0).padStart(5, '0')
  const newID = String(parseInt(currentUserID) + 1).padStart(5, '0')
  return newID
}
