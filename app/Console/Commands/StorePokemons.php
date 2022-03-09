<?php

namespace App\Console\Commands;

use App\Models\Pokemon;
use Illuminate\Console\Command;

class StorePokemons extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'store:pokemons';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command to fetch pokimons from csv and store into db';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $file_path= storage_path('app/public/pokemon.csv');
        $file = fopen($file_path,"r");

        // go through file content and extract needed data into an array
        $importData_arr = array();
        $i = 0;
        while (($filedata = fgetcsv($file, 1000, ",")) !== FALSE) {
           $num = count($filedata );
           if($i == 0){
              $i++;
              continue;
           }
           for ($c=0; $c < $num; $c++) {
              $importData_arr[$i][] = $filedata [$c];
           }
           $i++;
        }
        fclose($file);

        // Insert to MySQL database

        $insertData = [];

        // store all pokimons into single array
        foreach($importData_arr as $importData){
            $insertData []= [
               "identifier"=>$importData[1],
               "species_id"=>$importData[2],
               "height"=>$importData[3],
               "weight"=>$importData[4],
               "base_experience"=>$importData[5],
               "order"=>$importData[6],
               'is_default'=>$importData[7],

            ];
          }
        // save array of pokimons
        Pokemon::insert($insertData);

    }
}
