---
layout: default
title: Parameters
---

#### [Developer Documentation](../index) &#187; [Parameters](TableOfContents) &#187; OR VBECS AVAIL UNITS FORMAT<br/>
# OR VBECS AVAIL UNITS FORMAT

This parameter determines the format that Available Units is displayedon the Blood Bank Report and the Patient Information screen on theBlood Bank Order Dialog. 0:HORIZONTAL - Displays fields across the page, one line per date/time.                Printed reports splits line if longer than 79 characters. 1:VERTICAL   - Displays fields down the page in sections per date/time.              - Printed report looks the same. 2:SPLIT HORIZONTAL -    Patient Information Screen - Same as HORIZONTAL format   Report - Splits line in 2 if longer than 79 characters.   Printed Report - Splits line in 2 if longer than 79 characters. This parameter was created to address issues found when printingthe Blood Bank report in the horizontal format. The option of displaying/printing Available units vertically has been created. As more fields are added to this portion of the report withvariable lengths, the length of the line may go beyond the 80character limit for printing. This is not as big of an issue inthe Windows display. The Patient Information Screen cannot be printed, so no attempt has been made to split the line when itgoes beyond 79 characters. It functions the same when eitherHORIZONTAL or SPLIT HORIZONTAL is selected. For both HORIZONTAL display formats the length of the line expands or contracts depending on the column width of each fieldand the length of the longest line. Because of this it ispossible, though not likely, that the line will not split evenif SPLIT HORIZONTAL is selected.

## Properties

Property | Value
--- | ---
Summary | Display/Print Format for Available Units
Value Type | set of codes
Value Domain | 0:HORIZONTAL;1:VERTICAL;2:SPLIT HORIZONTAL
Multiple Instances | false

## Allowable Entities

Precedence | Entity
--- | ---
3 | DIVISION
5 | SYSTEM
10 | PACKAGE

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:40 pm</p>{:/}