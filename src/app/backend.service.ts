import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Schedule} from "./model/schedule";
import {Observable} from "rxjs";
import {ScheduleLine} from "./model/schedule-line";
import {ScheduleGraph} from "./model/schedule-graph";
import {ScheduleStatistics} from "./model/schedule-statistics";
import {ScheduleIncident} from "./model/schedule-incident";
import {TeamStatistics} from "./model/team-statistics";
import {PlayerStatistics} from "./model/player-statistics";
import {PlayerLastRatings} from "./model/player-last-ratings";
import {PlayerAttributes} from "./model/player-attributes";
import {LeagueStandings} from "./model/league-standings";
import {PeriodsBet} from "./model/periods-bet";

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  //endpoints
  private matches = '/api/matches'
  private team = '/api/team'
  private bet = '/api/betting'
  private player = '/api/player'
  private league = '/api/league'

  constructor(private http: HttpClient) { }

  //@matches_controller

  getSchedules(timestamp: number): Observable<Schedule[]>{
    return this.http.get<Schedule[]>( `${this.matches}/schedules/${timestamp}`)
  }
  getNextSchedules(): Observable<Schedule[]>{
    return this.http.get<Schedule[]>( `${this.matches}/schedules/next`)
  }
  getMatch(id: number): Observable<Schedule>{
    return this.http.get<Schedule>( `${this.matches}/${id}`)
  }
  getMatchLines(id: number): Observable<ScheduleLine>{
    return this.http.get<ScheduleLine>( `${this.matches}/${id}/line`)
  }
  getHead2Head(id: string): Observable<Schedule[]>{
    return this.http.get<Schedule[]>( `${this.matches}/${id}/h2h`)
  }
  getMatchGraph(id: number): Observable<ScheduleGraph>{
    return this.http.get<ScheduleGraph>( `${this.matches}/${id}/graph`)
  }
  getMatchStatistics(id: number): Observable<ScheduleStatistics>{
    return this.http.get<ScheduleStatistics>( `${this.matches}/${id}/statistics`)
  }
  getMatchIncidents(id: number): Observable<ScheduleIncident[]>{
    return this.http.get<ScheduleIncident[]>( `${this.matches}/${id}/incidents`)
  }
  getLiveSchedules(): Observable<Schedule[]>{
    return this.http.get<Schedule[]>( `${this.matches}/live`)
  }

  //@team_controller

  getTeamLastMatches(id: number): Observable<Schedule[]>{
    return this.http.get<Schedule[]>( `${this.team}/${id}/last`)
  }
  getTeamStatistics(id: number, tid: number, sid: number): Observable<TeamStatistics>{
    return this.http.get<TeamStatistics>( `${this.team}/${id}/${tid}/${sid}/statistics`)
  }

  //@player_controller

  getPlayerStatistics(id: number, tid: number, sid: number): Observable<PlayerStatistics>{
    return this.http.get<PlayerStatistics>( `${this.player}/${id}/${tid}/${sid}/statistics`)
  }
  getPlayerLastRatings(id: number, tid: number, sid: number): Observable<PlayerLastRatings[]>{
    return this.http.get<PlayerLastRatings[]>( `${this.player}/${id}/${tid}/${sid}/ratings`)
  }
  getPlayerAttributes(id: number, position: string): Observable<PlayerAttributes>{
    return this.http.get<PlayerAttributes>( `${this.player}/${id}/${position}/ratings`)
  }

  //@league_controller

  getLeagueStandingsTotal(tid: number, sid: number): Observable<LeagueStandings>{
    return this.http.get<LeagueStandings>( `${this.league}/${tid}/${sid}/standings`)
  }
  getLeagueStandingsHome(tid: number, sid: number): Observable<LeagueStandings>{
    return this.http.get<LeagueStandings>( `${this.league}/${tid}/${sid}/standings/home`)
  }
  getLeagueStandingsAway(tid: number, sid: number): Observable<LeagueStandings>{
    return this.http.get<LeagueStandings>( `${this.league}/${tid}/${sid}/standings/away`)
  }

  //@tbetting_controller

  getTeamBettingPeriods(id: number): Observable<PeriodsBet>{
    return this.http.get<PeriodsBet>( `${this.bet}/${id}/periods`)
  }
}
