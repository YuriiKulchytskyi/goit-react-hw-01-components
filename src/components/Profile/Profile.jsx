import {SectionProfile, MainInfoDiv, ImageProfile, ProfileList, ProfileListItem, Quantity, MainInfo } from "./Profile.style"


export const Profile = ({username, tag, location, avatar, stats}) => {
      return (<SectionProfile>
    <MainInfoDiv>
    <ImageProfile
      src={avatar}
      alt="User avatar"
    />
    <MainInfo>{username}</MainInfo>
    <MainInfo>@{tag}</MainInfo>
    <MainInfo>{location}</MainInfo>
  </MainInfoDiv>

  <ProfileList>
    <ProfileListItem >
      <span className="label">Followers</span>
      <Quantity>{stats.followers}</Quantity>
    </ProfileListItem>
    <ProfileListItem >
      <span className="label">Views</span>
      <Quantity>{stats.views}</Quantity>
    </ProfileListItem>
    <ProfileListItem >
      <span className="label">Likes</span>
      <Quantity>{stats.likes}</Quantity>
    </ProfileListItem>
  </ProfileList>
</SectionProfile>)
}