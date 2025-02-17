# visual-test-example-project

## Instalacja
```
pnpm i
```

## Odpalanie testów lokalnie
```
export SNAPSHOTS_TOKEN=token visual test projektu
pnpm run test
```


## Odpalanie testów w ci
```
export NODE_TLS_REJECT_UNAUTHORIZED=0
export SNAPSHOTS_SERVICE_URL=https://visual.sd9.com
export BUDDY_VT_TOKEN=token visual test projektu
pnpm run test-ci
```