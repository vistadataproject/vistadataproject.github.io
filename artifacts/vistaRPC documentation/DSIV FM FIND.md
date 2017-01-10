---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIV FM FIND 

 property | value 
--- | --- 
 label | DSIV FM FIND
 tag | FIND
 routine | [DSIVFM05](http://code.osehra.org/dox/Routine_DSIVFM05_source.html)
 return value type | GLOBAL ARRAY
 description |  This provides a wrapper around the FIND^DIC API.  It exposes more of the functionality of the API to the RPC than the old DSIC DDR FINDER RPC.  For a lookup value, this RPC will return all matches.  It allows for input a multiple screening logic which would be ANDed together.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | INPUT | LIST | 250 | true |  The INPUT(n) = tag^value   where   tag = LIST^DIC input parameter name such as         FILE  IENS  FIELDS  FLAGS  NUMBER  INDEX  VAL  SCREEN   value = value for that input parameter  For those input parameters that allow an array, you can pass that array in the tag such as SCREEN()^lookup value | 