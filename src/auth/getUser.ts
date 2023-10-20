const USER_TOKENS = new Map([["12345", "Dave"]]);

export function getUser(token: string) {
    return USER_TOKENS.get(token);
}
