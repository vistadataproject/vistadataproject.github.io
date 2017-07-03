---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DDR LOCK UNLOCK NODE
# DDR LOCK UNLOCK NODE

This function will lock or unlock an M global node.  Also,this function allows the calling application to specify thetimeout (in seconds) for a 'lock' command.

Property | Value
--- | ---
Label | LOCKC
Routine | [DDR1](http://code.osehra.org/dox/Routine_DDR1_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PARAMETERS | LIST | 512 |  | This array contains the following parameter necessary fora Lock command:|TAB|- NODE - the global node that needs to be locked/unlocked|TAB|- LOCKMODE - the operation to be done, Lock or Unlock|TAB|- TIMEOUT - integer representing the number of seconds during whichthe system attempts to lock or unlock a node before returning control tothe program .



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}