---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIC USR CLASS MEMBERSHIP 

 property | value 
--- | --- 
 label | DSIC USR CLASS MEMBERSHIP
 tag | USRCLASS
 routine | [DSICUSR](http://code.osehra.org/dox/Routine_DSICUSR_source.html)
 return value type | ARRAY
 description | For a given user and optional date, return class memberships for that user.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| INPUT | LIST | 50 | true | INPUT(n) := label name ^ label value  where n=0,1,2,3,... and    label name   label value    ----------   -------------------------------------------       USER      required = DUZ [pointer to file 200]        DATE      optional - will accept multiple formats:                  if not passed, then default to TODAY                  if <null>, then default to TODAY                  if \T\, then default to TODAY                  it can be any Fileman date                  if \*\, then return all class memberships whether or                     not if they are currently active If a date is passed (or if the input value is converted to TODAY's date), then only return those class memberships that were active as of that date | 




 ###### Generated on January 11th 2017, 6:39:43 am