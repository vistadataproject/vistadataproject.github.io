---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DDR LOCK_UNLOCK NODE 

 property | value 
--- | --- 
 label | DDR LOCK_UNLOCK NODE
 tag | LOCKC
 routine | [DDR1](http://code.osehra.org/dox/Routine_DDR1_source.html)
 return value type | SINGLE VALUE
 description | This function will lock or unlock an M global node.  Also,this function allows the calling application to specify thetimeout (in seconds) for a 'lock' command.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| PARAMETERS | LIST | 512 |  | This array contains the following parameter necessary fora Lock command:|TAB|- NODE - the global node that needs to be locked/unlocked|TAB|- LOCKMODE - the operation to be done, Lock or Unlock|TAB|- TIMEOUT - integer representing the number of seconds during whichthe system attempts to lock or unlock a node before returning control tothe program . | 




 Generated on January 11th 2017, 7:15:03 am