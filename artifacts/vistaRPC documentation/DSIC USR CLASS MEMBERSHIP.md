---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIC USR CLASS MEMBERSHIP 

 property | value 
--- | --- 
 label | {::nomarkdown}DSIC USR CLASS MEMBERSHIP{:/}
 tag | {::nomarkdown}USRCLASS{:/}
 routine | [DSICUSR](http://code.osehra.org/dox/Routine_DSICUSR_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}For a given user and optional date, return class memberships for that user.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}INPUT{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}50{:/} | {::nomarkdown}true{:/} | {::nomarkdown}INPUT(n) := label name ^ label value  where n=0,1,2,3,... and    label name   label value    ----------   -------------------------------------------       USER      required = DUZ [pointer to file 200]        DATE      optional - will accept multiple formats:                  if not passed, then default to TODAY                  if <null>, then default to TODAY                  if \T\, then default to TODAY                  it can be any Fileman date                  if \*\, then return all class memberships whether or                     not if they are currently active If a date is passed (or if the input value is converted to TODAY's date), then only return those class memberships that were active as of that date{:/} | 




 Generated on January 13th 2017, 6:15:57 am