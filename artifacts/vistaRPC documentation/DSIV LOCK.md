---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIV LOCK 

 property | value 
--- | --- 
 label | DSIV LOCK
 tag | LOCK
 routine | [DSIVLOCK](http://code.osehra.org/dox/Routine_DSIVLOCK_source.html)
 return value type | SINGLE VALUE
 description | Lock or unlock a global reference from a GUI client

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| REF | LITERAL | 30 | true | FM file number or $NAME(global) to be locked | 
| IFN | LITERAL | 30 | true | Required if REF is a file (or subfile) numberIf REF is the top level file number, then IFN is the  IEN of the recordIf REF is a subdictionary number for a multiple, then  IFN must be the appropriate IENS for that multiple  level | 
| FLAG | LITERAL | 2 | true | Flag for locking or unlocking  1: Lock -1: Unlock Defaults to 1 | 
| FUN | LITERAL | 1 | true | Flag to indicate if the call is extrinsic or RPC   1: Extrinsic  0: RPC | 




 Generated on January 11th 2017, 7:15:04 am