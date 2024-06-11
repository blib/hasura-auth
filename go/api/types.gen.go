// Package api provides primitives to interact with the openapi HTTP API.
//
// Code generated by github.com/deepmap/oapi-codegen/v2 version v2.2.0 DO NOT EDIT.
package api

import (
	"encoding/json"
	"fmt"
	"time"

	protocol "github.com/go-webauthn/webauthn/protocol"
	openapi_types "github.com/oapi-codegen/runtime/types"
)

const (
	BearerAuthScopes         = "BearerAuth.Scopes"
	BearerAuthElevatedScopes = "BearerAuthElevated.Scopes"
)

// Defines values for ErrorResponseError.
const (
	DefaultRoleMustBeInAllowedRoles ErrorResponseError = "default-role-must-be-in-allowed-roles"
	DisabledEndpoint                ErrorResponseError = "disabled-endpoint"
	DisabledUser                    ErrorResponseError = "disabled-user"
	EmailAlreadyInUse               ErrorResponseError = "email-already-in-use"
	EmailAlreadyVerified            ErrorResponseError = "email-already-verified"
	ForbiddenAnonymous              ErrorResponseError = "forbidden-anonymous"
	InternalServerError             ErrorResponseError = "internal-server-error"
	InvalidEmailPassword            ErrorResponseError = "invalid-email-password"
	InvalidPat                      ErrorResponseError = "invalid-pat"
	InvalidRefreshToken             ErrorResponseError = "invalid-refresh-token"
	InvalidRequest                  ErrorResponseError = "invalid-request"
	LocaleNotAllowed                ErrorResponseError = "locale-not-allowed"
	PasswordInHibpDatabase          ErrorResponseError = "password-in-hibp-database"
	PasswordTooShort                ErrorResponseError = "password-too-short"
	RedirectToNotAllowed            ErrorResponseError = "redirectTo-not-allowed"
	RoleNotAllowed                  ErrorResponseError = "role-not-allowed"
	SignupDisabled                  ErrorResponseError = "signup-disabled"
	UnverifiedUser                  ErrorResponseError = "unverified-user"
	UserNotAnonymous                ErrorResponseError = "user-not-anonymous"
)

// Defines values for OKResponse.
const (
	OK OKResponse = "OK"
)

// Defines values for UserDeanonymizeRequestSignInMethod.
const (
	EmailPassword UserDeanonymizeRequestSignInMethod = "email-password"
	Passwordless  UserDeanonymizeRequestSignInMethod = "passwordless"
)

// CreatePATRequest defines model for CreatePATRequest.
type CreatePATRequest struct {
	// ExpiresAt Expiration date of the PAT
	ExpiresAt time.Time               `json:"expiresAt"`
	Metadata  *map[string]interface{} `json:"metadata,omitempty"`
}

// CreatePATResponse defines model for CreatePATResponse.
type CreatePATResponse struct {
	// Id ID of the PAT
	Id string `json:"id"`

	// PersonalAccessToken PAT
	PersonalAccessToken string `json:"personalAccessToken"`
}

// ErrorResponse defines model for ErrorResponse.
type ErrorResponse struct {
	// Error Error code that identifies the application error
	Error ErrorResponseError `json:"error"`

	// Message Human friendly error message
	Message string `json:"message"`

	// Status HTTP status error code
	Status int `json:"status"`
}

// ErrorResponseError Error code that identifies the application error
type ErrorResponseError string

// MFAChallengePayload defines model for MFAChallengePayload.
type MFAChallengePayload struct {
	Ticket string `json:"ticket"`
}

// OKResponse defines model for OKResponse.
type OKResponse string

// OptionsRedirectTo defines model for OptionsRedirectTo.
type OptionsRedirectTo struct {
	RedirectTo *string `json:"redirectTo,omitempty"`
}

// RefreshTokenRequest defines model for RefreshTokenRequest.
type RefreshTokenRequest struct {
	// RefreshToken Refresh Token
	RefreshToken string `json:"refreshToken"`
}

// Session defines model for Session.
type Session struct {
	AccessToken          string `json:"accessToken"`
	AccessTokenExpiresIn int64  `json:"accessTokenExpiresIn"`

	// RefreshToken Refresh token during authentication or when refreshing the JWT
	RefreshToken string `json:"refreshToken"`

	// RefreshTokenId Refresh token id
	RefreshTokenId string `json:"refreshTokenId"`
	User           *User  `json:"user,omitempty"`
}

// SessionPayload defines model for SessionPayload.
type SessionPayload struct {
	Session *Session `json:"session,omitempty"`
}

// SignInEmailPasswordRequest defines model for SignInEmailPasswordRequest.
type SignInEmailPasswordRequest struct {
	// Email A valid email
	Email openapi_types.Email `json:"email"`

	// Password A password of minimum 3 characters
	Password string `json:"password"`
}

// SignInEmailPasswordResponse defines model for SignInEmailPasswordResponse.
type SignInEmailPasswordResponse struct {
	Mfa     *MFAChallengePayload `json:"mfa,omitempty"`
	Session *Session             `json:"session,omitempty"`
}

// SignInPATRequest defines model for SignInPATRequest.
type SignInPATRequest struct {
	// PersonalAccessToken PAT
	PersonalAccessToken string `json:"personalAccessToken"`
}

// SignInPasswordlessEmailRequest defines model for SignInPasswordlessEmailRequest.
type SignInPasswordlessEmailRequest struct {
	// Email A valid email
	Email   openapi_types.Email `json:"email"`
	Options *SignUpOptions      `json:"options,omitempty"`
}

// SignUpEmailPasswordRequest defines model for SignUpEmailPasswordRequest.
type SignUpEmailPasswordRequest struct {
	// Email A valid email
	Email   openapi_types.Email `json:"email"`
	Options *SignUpOptions      `json:"options,omitempty"`

	// Password A password of minimum 3 characters
	Password string `json:"password"`
}

// SignUpOptions defines model for SignUpOptions.
type SignUpOptions struct {
	AllowedRoles *[]string `json:"allowedRoles,omitempty"`
	DefaultRole  *string   `json:"defaultRole,omitempty"`
	DisplayName  *string   `json:"displayName,omitempty"`

	// Locale A two-characters locale
	Locale     *string                 `json:"locale,omitempty"`
	Metadata   *map[string]interface{} `json:"metadata,omitempty"`
	RedirectTo *string                 `json:"redirectTo,omitempty"`
}

// SignUpWebauthnRequest defines model for SignUpWebauthnRequest.
type SignUpWebauthnRequest struct {
	// Email A valid email
	Email   openapi_types.Email `json:"email"`
	Options *SignUpOptions      `json:"options,omitempty"`
}

// SignUpWebauthnResponse defines model for SignUpWebauthnResponse.
type SignUpWebauthnResponse = protocol.PublicKeyCredentialCreationOptions

// SignUpWebauthnVerifyRequest defines model for SignUpWebauthnVerifyRequest.
type SignUpWebauthnVerifyRequest struct {
	Credential *protocol.CredentialCreationResponse `json:"credential,omitempty"`
	Options    *struct {
		AllowedRoles *[]string `json:"allowedRoles,omitempty"`
		DefaultRole  *string   `json:"defaultRole,omitempty"`
		DisplayName  *string   `json:"displayName,omitempty"`

		// Locale A two-characters locale
		Locale     *string                 `json:"locale,omitempty"`
		Metadata   *map[string]interface{} `json:"metadata,omitempty"`
		Nickname   *string                 `json:"nickname,omitempty"`
		RedirectTo *string                 `json:"redirectTo,omitempty"`
	} `json:"options,omitempty"`
	AdditionalProperties map[string]interface{} `json:"-"`
}

// User defines model for User.
type User struct {
	AvatarUrl   string    `json:"avatarUrl"`
	CreatedAt   time.Time `json:"createdAt"`
	DefaultRole string    `json:"defaultRole"`
	DisplayName string    `json:"displayName"`

	// Email A valid email
	Email         string `json:"email"`
	EmailVerified bool   `json:"emailVerified"`

	// Id Id of the user
	Id          string `json:"id"`
	IsAnonymous bool   `json:"isAnonymous"`

	// Locale A two-characters locale
	Locale              string                 `json:"locale"`
	Metadata            map[string]interface{} `json:"metadata"`
	PhoneNumber         string                 `json:"phoneNumber"`
	PhoneNumberVerified bool                   `json:"phoneNumberVerified"`
	Roles               []string               `json:"roles"`
	TelegramId          string                 `json:"telegramId"`
}

// UserDeanonymizeRequest defines model for UserDeanonymizeRequest.
type UserDeanonymizeRequest struct {
	// Connection Deprecated, will be ignored
	// Deprecated:
	Connection *string `json:"connection,omitempty"`

	// Email A valid email
	Email   openapi_types.Email `json:"email"`
	Options *SignUpOptions      `json:"options,omitempty"`

	// Password A password of minimum 3 characters
	Password *string `json:"password,omitempty"`

	// SignInMethod Which sign-in method to use
	SignInMethod UserDeanonymizeRequestSignInMethod `json:"signInMethod"`
}

// UserDeanonymizeRequestSignInMethod Which sign-in method to use
type UserDeanonymizeRequestSignInMethod string

// UserEmailChangeRequest defines model for UserEmailChangeRequest.
type UserEmailChangeRequest struct {
	// NewEmail A valid email
	NewEmail openapi_types.Email `json:"newEmail"`
	Options  *OptionsRedirectTo  `json:"options,omitempty"`
}

// UserEmailSendVerificationEmailRequest defines model for UserEmailSendVerificationEmailRequest.
type UserEmailSendVerificationEmailRequest struct {
	// Email A valid email
	Email   openapi_types.Email `json:"email"`
	Options *OptionsRedirectTo  `json:"options,omitempty"`
}

// UserPasswordResetRequest defines model for UserPasswordResetRequest.
type UserPasswordResetRequest struct {
	// Email A valid email
	Email   openapi_types.Email `json:"email"`
	Options *OptionsRedirectTo  `json:"options,omitempty"`
}

// PostPatJSONRequestBody defines body for PostPat for application/json ContentType.
type PostPatJSONRequestBody = CreatePATRequest

// PostSigninEmailPasswordJSONRequestBody defines body for PostSigninEmailPassword for application/json ContentType.
type PostSigninEmailPasswordJSONRequestBody = SignInEmailPasswordRequest

// PostSigninPasswordlessEmailJSONRequestBody defines body for PostSigninPasswordlessEmail for application/json ContentType.
type PostSigninPasswordlessEmailJSONRequestBody = SignInPasswordlessEmailRequest

// PostSigninPatJSONRequestBody defines body for PostSigninPat for application/json ContentType.
type PostSigninPatJSONRequestBody = SignInPATRequest

// PostSignupEmailPasswordJSONRequestBody defines body for PostSignupEmailPassword for application/json ContentType.
type PostSignupEmailPasswordJSONRequestBody = SignUpEmailPasswordRequest

// PostSignupWebauthnJSONRequestBody defines body for PostSignupWebauthn for application/json ContentType.
type PostSignupWebauthnJSONRequestBody = SignUpWebauthnRequest

// PostSignupWebauthnVerifyJSONRequestBody defines body for PostSignupWebauthnVerify for application/json ContentType.
type PostSignupWebauthnVerifyJSONRequestBody = SignUpWebauthnVerifyRequest

// PostTokenJSONRequestBody defines body for PostToken for application/json ContentType.
type PostTokenJSONRequestBody = RefreshTokenRequest

// PostUserDeanonymizeJSONRequestBody defines body for PostUserDeanonymize for application/json ContentType.
type PostUserDeanonymizeJSONRequestBody = UserDeanonymizeRequest

// PostUserEmailChangeJSONRequestBody defines body for PostUserEmailChange for application/json ContentType.
type PostUserEmailChangeJSONRequestBody = UserEmailChangeRequest

// PostUserEmailSendVerificationEmailJSONRequestBody defines body for PostUserEmailSendVerificationEmail for application/json ContentType.
type PostUserEmailSendVerificationEmailJSONRequestBody = UserEmailSendVerificationEmailRequest

// PostUserPasswordResetJSONRequestBody defines body for PostUserPasswordReset for application/json ContentType.
type PostUserPasswordResetJSONRequestBody = UserPasswordResetRequest

// Getter for additional properties for SignUpWebauthnVerifyRequest. Returns the specified
// element and whether it was found
func (a SignUpWebauthnVerifyRequest) Get(fieldName string) (value interface{}, found bool) {
	if a.AdditionalProperties != nil {
		value, found = a.AdditionalProperties[fieldName]
	}
	return
}

// Setter for additional properties for SignUpWebauthnVerifyRequest
func (a *SignUpWebauthnVerifyRequest) Set(fieldName string, value interface{}) {
	if a.AdditionalProperties == nil {
		a.AdditionalProperties = make(map[string]interface{})
	}
	a.AdditionalProperties[fieldName] = value
}

// Override default JSON handling for SignUpWebauthnVerifyRequest to handle AdditionalProperties
func (a *SignUpWebauthnVerifyRequest) UnmarshalJSON(b []byte) error {
	object := make(map[string]json.RawMessage)
	err := json.Unmarshal(b, &object)
	if err != nil {
		return err
	}

	if raw, found := object["credential"]; found {
		err = json.Unmarshal(raw, &a.Credential)
		if err != nil {
			return fmt.Errorf("error reading 'credential': %w", err)
		}
		delete(object, "credential")
	}

	if raw, found := object["options"]; found {
		err = json.Unmarshal(raw, &a.Options)
		if err != nil {
			return fmt.Errorf("error reading 'options': %w", err)
		}
		delete(object, "options")
	}

	if len(object) != 0 {
		a.AdditionalProperties = make(map[string]interface{})
		for fieldName, fieldBuf := range object {
			var fieldVal interface{}
			err := json.Unmarshal(fieldBuf, &fieldVal)
			if err != nil {
				return fmt.Errorf("error unmarshaling field %s: %w", fieldName, err)
			}
			a.AdditionalProperties[fieldName] = fieldVal
		}
	}
	return nil
}

// Override default JSON handling for SignUpWebauthnVerifyRequest to handle AdditionalProperties
func (a SignUpWebauthnVerifyRequest) MarshalJSON() ([]byte, error) {
	var err error
	object := make(map[string]json.RawMessage)

	if a.Credential != nil {
		object["credential"], err = json.Marshal(a.Credential)
		if err != nil {
			return nil, fmt.Errorf("error marshaling 'credential': %w", err)
		}
	}

	if a.Options != nil {
		object["options"], err = json.Marshal(a.Options)
		if err != nil {
			return nil, fmt.Errorf("error marshaling 'options': %w", err)
		}
	}

	for fieldName, field := range a.AdditionalProperties {
		object[fieldName], err = json.Marshal(field)
		if err != nil {
			return nil, fmt.Errorf("error marshaling '%s': %w", fieldName, err)
		}
	}
	return json.Marshal(object)
}
