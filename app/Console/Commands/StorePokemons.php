<?php

namespace App\Console\Commands;

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
        return 0;
    }
}
