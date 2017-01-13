---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIV DATE CONVERT 

 property | value 
--- | --- 
 label | {::nomarkdown}DSIV DATE CONVERT{:/}
 tag | {::nomarkdown}CNVT{:/}
 routine | [DSIVDT](http://code.osehra.org/dox/Routine_DSIVDT_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This will take a date in any format and convert it to any other format.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}INVAL{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}25{:/} | {::nomarkdown}true{:/} | {::nomarkdown} This is the input date.time value to be converted.  If this parameters contains any alpha characters, this RPC will always assume that this input value is in external form (i.e., human readable format).  When sending external (human readable) date.time, then following applies:  1. If a two-digit year is entered, a year less than 20 years in the    future and no more than 80 years in the past is assumed. For    example, in the year 2000, two-digit years are assumed to be    between 1920 through 2019.  2. For Internationalization, this assumes that in the input, the day    number precedes the month number. For example, input of 05/11/2000    is assumed to be November 5, 2000 (instead of May 11, 2000). Also,    with this flag, the month must be input as a number. For example,    November must be input as 11, not NOV.  3. To simplify entering dates, you can use shortcuts such as T for    today, T-1 for yesterday, or T+1 for tomorrow. Or you can combine    T with D for day, W for week, M for month, or Y for year; T-2D    means two days ago, T+1W means today plus one week, T+4M means four    months from today, and T-3Y means three years ago from today.  4. For time input, to be totally unambiguous, time can be as military    time (four or six digits, no colon), hour AM/PM, hour:minute AM/PM,    or hour:minute:second AM/PM. If you do omit an AM/PM notation, the    following assumptions are made:    a. If you enter a single digit for the hour, a time between 6AM       and 6PM is used. Thus, T@330 (or T@3:30) means today at 3:30 PM       and T@945 (or T@9:45) means today at 9:45 AM.    b. If you enter two digits for the hour, the actual hour entered is       used (as if military time were being used). Thus, T@0330 (or       T@03:30) means today at 3:30 AM.    c. As with dates, there are supported abbreviations you can use       when entering times in DATE/TIME fields.       1) To enter the present moment, you can enter the word NOW       2) To enter an hour from the present moment, enter NOW+1H       3) To enter an hour ago from the present moment, enter NOW-1H       4) You can also combine NOW with D for day, M for month, and          ' (apostrophe) for minute (NOW+3' for present time plus 3          minutes.       5) And you can enter MID for 12 a.m. and NOON for 12 p.m.{:/} | 
| {::nomarkdown}INTYPE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}2{:/} | {::nomarkdown}true{:/} | {::nomarkdown} Optional - only if INVAL contains an alpha character.  Else, this is required. Usually it is a single character.  If two characters, then it must be one of the first 6 listed below plus \I\.  If INVAL=\I\ then assume INVAL in external format.   \D\ - INVAL is in Delphi internal format  \F\ - INVAL is in internal Fileman format  \E\ - INVAL is in external format (human readable)  \M\ - INVAL is in internal M format ($H)  \H\ - INVAL is in HL7 format  \G\ - INVAL is in UCT format  \I\ - INVAL is in Internationalized format, i.e.,        the day number precedes the month number{:/} | 
| {::nomarkdown}OUTYPE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}6{:/} | {::nomarkdown}true{:/} | {::nomarkdown} Optional - default value is internal Fileman format \F\.  This is a string of characters designating output format(s)  If OUTYPE contains \F\ - return internal Fileman format                    \D\ - return internal Delphi format                    \E\ - return external format                    \M\ - return internal M format ($H)                    \A\ - return all formats                    \H\ - return HL7 format                    \G\ - return UCT format{:/} | 
| {::nomarkdown}OUTFMT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown} Optional - this param controls the format of the returned value for external date value only.  OUTFMT can contain only a single digit plus optional alpha characters.  If OUTFMT = \\ - then return mmm dd, yyyy@hh:mm:ss - default           contains 1 -       mmm dd, yyyy@hh:mm:ss - default                    2 -       mm/dd/yy@hh:mm:ss [no leading zeros]                    3 -       dd/mm/yy@hh:mm:ss [no leading zeros]                    4 -       yy/mm/dd@hh:mm:ss [no leading zeros]                    5 -       mm/dd/yyyy@hh:mm:ss [no leading zeros]                    6 -       dd/mm/yyyy@hh:mm:ss [no leading zeros]                    7 -       yyyy/mm/dd@hh:mm:ss [no leading zeros]                    D -       return date only                    F -       output with leading blanks                    S -       force seconds in outputs                    Z -       pad months and days with leading zeros                    P -  output time in ' hh:mm:ss am/pm'{:/} | 
| {::nomarkdown}TIMEFMT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown} Optional - controls what portion of the time part of the date will be returned.  Default value is M  If TIMEFMT = H, then return only hours            = M, then return only hour:minute            = S, then return seconds{:/} | 




 Generated on January 13th 2017, 6:15:57 am