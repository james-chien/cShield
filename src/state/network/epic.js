import { merge, fromEvent } from 'rxjs'
import { mergeMap, map } from 'rxjs/operators'
import { ofType } from 'redux-observable'

import { checking, changed } from './slice'

export const checkNetworkEpic = (action$, state$) =>
  action$.pipe(
    ofType(checking.type),
    mergeMap((action) => {
      return merge(
        fromEvent(window, 'online').pipe(
          map((x) => changed(true))
        ),
        fromEvent(window, 'offline').pipe(
          map((x) => changed(false))
        )
      )
    })
  )
