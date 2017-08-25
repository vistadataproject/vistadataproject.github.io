---
layout: default
title: Parameters
---

#### [Developer Documentation](../index) &#187; [Parameters](TableOfContents) &#187; EDPF LOCATION<br/>
# EDPF LOCATION

This parameter lists the entry or entries from the Hospital Location file (#44) that are used by the Emergency Department.  If there are multiple Hospital Location file entries for the Emergency Department there are two choices when prompted for &quot;Time Range or Sequence&quot;: Time Range allows you to map Hospital Location entries by time of day.  When creating an encounter in PCE, EDIS will match the Hospital Location based on the current time of day.  You may enter the time range in military time.  For example, 0800-1600 or 1800-2400 would be two possible time range entries. Sequence allows you to map Hospital Location entries in a preferred order.  When creating an encounter in PCE, EDIS will use the entry with the lowest sequence number to create the visit. When creating the encounter by using the scheduling package to check-in, any matches to the list (whether time range or sequence based) will cause the checked-in patient to be added to the display board.

## Properties

Property | Value
--- | ---
Summary | Location(s) for Emergency Department
Value Type | pointer
Value Domain | 44
Multiple Instances | true

## Allowable Entities

Precedence | Entity
--- | ---
2 | DIVISION

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:40 pm</p>{:/}