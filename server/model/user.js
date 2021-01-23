export class User {
  constructor(
    UserName,
    Password,
    Email,
    GroupId,
    ProfileImage,
    UserState,
    UserType,
    UserAbout,
    UserLocation,
    DateAdded,
    Phone,
    Website,
    CompanyId
  ) {
    this.UserName = UserName;
    this.Password = Password;
    this.Email = Email;
    this.GroupId = GroupId;
    this.ProfileImage = ProfileImage;
    this.UserState = UserState;
    this.UserType = UserType;
    this.UserAbout = UserAbout;
    this.UserLocation = UserLocation;
    this.DateAdded = DateAdded;
    this.Phone = Phone;
    this.Website = Website;
    this.CompanyId = CompanyId;
  }
}
