---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; DDR LOCK_UNLOCK NODE 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}DDR LOCK_UNLOCK NODE{:/}
 tag | {::nomarkdown}LOCKC{:/}
 routine | [DDR1](http://code.osehra.org/dox/Routine_DDR1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This function will lock or unlock an M global node.  Also,this function allows the calling application to specify thetimeout (in seconds) for a 'lock' command.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PARAMETERS{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}512{:/} |  | {::nomarkdown}This array contains the following parameter necessary fora Lock command:TAB- NODE - the global node that needs to be locked/unlockedTAB- LOCKMODE - the operation to be done, Lock or UnlockTAB- TIMEOUT - integer representing the number of seconds during whichthe system attempts to lock or unlock a node before returning control tothe program .{:/} | 




 Generated on January 14th 2017, 7:26:35 am